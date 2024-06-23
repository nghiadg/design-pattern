// subsystem 1
class Discount {
  calc(value, discount) {
    return value * (1 - discount);
  }
}

// subsystem 2
class Shipping {
  calc() {
    return 15000;
  }
}

// subsystem 3
class Fees {
  calc(value) {
    return value * 0.1; // 10% VAT
  }
}

class EcommerceFacade {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  payment(price) {
    price = this.discount.calc(price, 0.1);
    price += this.fees.calc(price);
    price += this.shipping.calc();

    return price;
  }
}

const ecommerce = new EcommerceFacade();

const totalPayment = ecommerce.payment(20000);
console.log("total payment is ", totalPayment);
