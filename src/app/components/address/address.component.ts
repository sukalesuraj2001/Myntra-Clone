import { Component } from '@angular/core';
import { Profile } from 'src/app/product_data/profileData';
import { AuthService } from 'src/app/services/auth.service';
import { PlaceOrderService } from 'src/app/services/place-order.service';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {


  discount=10;
  shipping=40;
  isAddressFormVisible: boolean = false;
  amounts: number[] = [];
  totalAmountSum: number = 0;
  username: string = '';
  address: any;
  counter: number = 0;
  mobileNo: any;
  profiledata: Profile[] = [];
  productName:string=""
  productImage:string="";
  totalprice:number=0

  constructor(private auth: AuthService, private order: PlaceOrderService) {}
  ngOnInit(data: Profile): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.username = localStorage.getItem('userName') ?? '';
    // this.address=localStorage.getItem("address")?? "";
    this.auth.getProfile(data as Profile).subscribe((res) => {
      this.profiledata = res;
      if (this.profiledata.length > 0) {
        console.log('the address is ' + this.profiledata[0].address1);
        console.log('the address is ' + this.profiledata[0].mobileNumber);
        this.address = this.profiledata[0].address1;
        this.mobileNo = this.profiledata[0].mobileNumber;
      }
    });
    const storedValue = sessionStorage.getItem("date");

    // Parse the stored value to the appropriate data type
    this.productName = storedValue ? JSON.parse(storedValue) : null;
    this.order.getOrder().subscribe((res: any) => {
      const entries = Object.entries(res);
      this.counter = entries.length;
      console.log('Counter is ' + this.counter);
      console.log('the order data ' + JSON.stringify(res));

      this.totalAmountSum = res.reduce(
        (acc: any, order: { totalAmount: any }) => acc + order.totalAmount,
        0
      );
      console.log('Total Amount Sum: ' + this.totalAmountSum);

      // Access and use specific properties
      const userDetails = res[0].userDetails;
      const orderID = res[0].orderID;
      const selectedItems = res[0].selectedItems;

      // Check if userDetails exist
      if (userDetails) {
        console.log('User Details: ', userDetails);
      } else {
        console.log('User Details not found');
      }

      console.log('Order ID: ', orderID);
      if (selectedItems && Array.isArray(selectedItems)) {
        selectedItems.forEach((item: any) => {
          // this.productName=item.productName
          this.productImage=item.image
          this.totalprice=item.totalprice
          console.log('Selected Item - Product Name: ', item.productName);
          console.log('Selected Item - Product Image: ', item.image);
          console.log('Selected Item - Product Image: ', item.totalprice);
        });
      } else {
        console.log('Selected Items not found or not an array');
      }
    });
  }

  isCollapsed = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

// email confrigation













}
