import React from 'react'

const ContactForm = () => {
    return (
        <div className="">
            <form className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 px-10 md:px-28 space-y-4'>
                <div>
                    <label className=''>First Name:</label><br />
                    <input
                        type="  text"
                        placeholder="Enter Your Name"
                        className="p-2 border border-gray-400  rounded-l-md w-72 md:w-auto"
                    />
                </div>
                <div>
                    <label>Last Name:</label> <br />
                    <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        className="p-2 border border-gray-400  rounded-l-md w-72 md:w-auto"
                    />
                    

                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="p-2 border border-gray-400  rounded-l-md w-72 md:w-auto"
                    />

                </div>
                <div>
                    <label htmlFor="">Phone No:</label><br />
                    <input
                        type="number"
                        placeholder="Enter Your Phone No"
                        className="p-2 border border-gray-400  rounded-l-md w-72 md:w-auto"
                    />
                </div>
                <div>
                    <label htmlFor="">Adress:</label><br />
                    <input
                        type="text"
                        placeholder="Enter Your Adress"
                        className="p-2 border border-gray-400  rounded-l-md w-72 md:w-auto"
                    />
                </div>
                <div>
                    <label htmlFor="">Area:</label><br />


                    <select name="Area" id="" required
                        className="p-2 border border-gray-400  rounded-l-md w-72 md:w-auto">
                        <option value="">Select Area</option>
                        <option value="Foggy Bottom">Foggy Bottom</option>
                        <option value="Swiss">Swiss</option>
                        <option value="Capitol Hill">Capitol Hill</option>
                        <option value="Georgetown">Georgetown</option>
                    </select>



                </div>
                <div>


                </div>



            </form>
        </div>
    )
}

export default ContactForm