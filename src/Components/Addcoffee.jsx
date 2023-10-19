import Swal from 'sweetalert2'

const Addcoffee = () => {

   const handlAdd= event=>{
    event.preventDefault();
     const form =event.target;
     const name = form.name.value ;
     const price = form.price.value ;
     const amount = form.amount.value ;
     const company = form.company.value ;
     const img=form.img.value;

     const newCoffee={name,price,amount,company,img}

     fetch(`http://localhost:5000/coffee`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newCoffee)
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee is added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
     })

     console.log(newCoffee)
   }
    return (
        <div>
            <div className='bg-[#] m-8'>
                <h1>Add new  coffee</h1>
                <form onSubmit={handlAdd}>
                <div  >
                    <p className=' font-bold'>Coffee name</p>
                    <input type="text" name='name' placeholder='name'  />
                    <p className=' font-bold'>price</p>
                    <input type="text" name='price' placeholder='price'  />
                    <p className=' font-bold'>amount</p>
                    <input type="text" name='amount' placeholder='amount'  />
                    <p className=' font-bold'>company name</p>
                    <input type="text" name='company' placeholder='name'  />
                    <p className=' font-bold'>img url</p>
                    <input type="text" name='img' placeholder='name'  /> <br />
                    <input type="submit" value="add " className='btn bin-primary' />

                </div>

                </form>
               
            </div>

        </div>
    );
};

export default Addcoffee;