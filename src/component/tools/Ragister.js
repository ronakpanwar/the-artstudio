import React ,{useState} from 'react'

const Ragister = () => {
    const [userData, setUserData] = useState({
        phone : "",
        email :"",
        userName: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleLogged = (e) => {
        e.preventDefault();
        window.alert(userData.userName)
    }


    return (
        <div className='px-4 py-2 w-full  '>
            <div className='text-center my-4'>
                {/* <h1 className='text-7xl'><i class="fa-regular fa-user"></i></h1> */}
                <h1 className='text-3xl font-bold'>Ragister Now </h1>
            </div>


            <form action=""  onSubmit={handleLogged} className='flex flex-col  items-center w-full'>
            
            <label htmlFor="phone"
                    className='p-2 w-3/5 m-2'>

                    <input type="text"
                        className='w-full px-4 py-2 border-none focus:outline-none rounded-2xl drop-shadow-md '
                        name='phone'
                        value={userData.phone}
                        onChange={handleChange}
                        placeholder='phone no.'
                        required />
                </label>

            <label htmlFor="email"
                    className='p-2 w-3/5 m-2'>

                    <input type="email"
                        className='w-full px-4 py-2 border-none focus:outline-none rounded-2xl drop-shadow-md '
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Enter valid Email"
                        required />
                </label>

                <label htmlFor="userName"
                    className='p-2 w-3/5 m-2'>

                    <input type="text"
                        className='w-full px-4 py-2 border-none focus:outline-none rounded-2xl drop-shadow-md '
                        name='userName'
                        value={userData.userName}
                        onChange={handleChange}
                        placeholder='user name'
                        required />
                </label>


                <label htmlFor="password" className='p-2 w-3/5 m-1' >
                    <input className='w-full px-4 py-2 border-none focus:outline-none rounded-2xl drop-shadow-md'
                        type="password"
                        name='password'
                        value={userData.password}
                        onChange={handleChange}
                        placeholder='password'
                        required />
                </label>


               <button className='px-6 py-2 bg-blue-400 m-5 rounded-3xl hover:bg-blue-500 shadow-xl'>Ragister Now</button>
           
            </form>
        </div>
    )
}


export default Ragister
