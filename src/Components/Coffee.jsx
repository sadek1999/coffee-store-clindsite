import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Coffee = ({ coffee }) => {
    const { _id,name, price, amount, company, img } = coffee;

    const handlDelet=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method:'delete'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                }

            })
              
            }
          })

        
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">name :{name}</h2>
                    <p>price : {price}</p>
                    <p>amount : { amount}</p>
                    <p>suplarr : { company}</p>
                   
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View</button>
                       <Link to={`update/${_id}`}>
                       <button className="btn btn-primary">Edit</button>
                       </Link>
                        <button 
                        onClick={()=>handlDelet(_id)}
                        className="btn btn-primary">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;