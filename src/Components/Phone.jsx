import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log(phone);
    return (
        <div>
            <h2>{phone.name}</h2>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;


// echo "# my-phone-client" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shawon012/my-phone-client.git
// git push -u origin main