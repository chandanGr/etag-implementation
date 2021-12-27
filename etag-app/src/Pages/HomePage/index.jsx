import React from 'react';
import Counter from '../../Components/Counter';
import UserContianer from '../../Components/UsersContainer';

function HomePage() {
    return (
        <div>
            <Counter />
            {/* <UserContianer /> */}
        </div>
    );
}

export default HomePage;



// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand) {
//     super(brand);
//   }
// }