
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const Updatecoffee = () => {



    const coffee=useLoaderData()
    const { _id,name, price, amount, company, img } = coffee;

    const handlupdate= event=>{
        event.preventDefault();
         const form =event.target;
         const name = form.name.value ;
         const price = form.price.value ;
         const amount = form.amount.value ;
         const company = form.company.value ;
         const img=form.img.value;
    
         const updateCoffee={name,price,amount,company,img}
    
         fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'Put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         })
    
         
       }
    return (
        <div>
            <div className=' m-8 w-full'>
                <h1>Add new  coffee</h1>
                <form onSubmit={handlupdate}>
                <div  className='w-full ' >
                    <p className=' font-bold'>Coffee name</p>
                    <input type="text" name='name' defaultValue={name} placeholder='name'  />
                    <p className=' font-bold'>price</p>
                    <input type="text" defaultValue={price} name='price' placeholder='price'  />
                    <p className=' font-bold'>amount</p>
                    <input type="text" name='amount' defaultValue={amount} placeholder='amount'  />
                    <p className=' font-bold'>company name</p>
                    <input type="text" name='company'defaultValue={company} placeholder='name'  />
                    <p className=' font-bold'>img url</p>
                    <input type="text" name='img' defaultValue={img} placeholder='name'  /> <br />
                    <input type="submit" value="add " className='btn bin-primary' />

                </div>

                </form>
               
            </div>

        </div>
    );
};

export default Updatecoffee;