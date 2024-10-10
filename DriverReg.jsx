import React, { useState } from 'react';


import './DriverReg.css';

function DriverReg() {
  const [setPhoto] = useState(null);
  const [setFrontPhoto] = useState(null);
  const [setBackPhoto] = useState(null);
  const [drivingExperience, setDrivingExperience] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    address: '',
    drivingLicenseNumber: '',
    userNic: '',
    gender: '',
    language: '',
    townsNearYou: ['', ''],
    vehicleClasses: [], 
    hasDrivingExperience: false,
    yearsOfExperience: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      
      if (checked) {
        setFormData({
          ...formData,
          vehicleClasses: [...formData.vehicleClasses, value],
        });
      } else {
        setFormData({
          ...formData,
          vehicleClasses: formData.vehicleClasses.filter((vehicleClass) => vehicleClass !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  
  const handleDrivingExperience = (value) => {
    setDrivingExperience(value);
    setFormData({
      ...formData,
      hasDrivingExperience: value,
      yearsOfExperience: value ? formData.yearsOfExperience : '',
    });
  };

 


  return (
    <div className="container">
     

      <form className="form">
        <div className="section person-photo">
          <label>Clear Photo of Person</label>
          <div className="photo-actions">
            <input
              type='file'
              onChange={e => setPhoto(e.target.files[0])}
              required
            />
          <button className="btn add">Add</button>
          <button className="btn edit">Edit</button>
          </div>
        </div>

        <div className="section personal-info">
          <div className="row">
            <label>First Name:
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>Email:
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>Mobile Number:
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Enter Your Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>Address:
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>Driving License Number:
            <input
              type="text"
              name="drivingLicenseNumber"
              placeholder="Enter Your Driving License Number"
              value={formData.drivingLicenseNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label>User NIC:
            <input
              type="text"
              id="nic-input"
              name="userNic"
              placeholder="Enter Your NIC"
              value={formData.userNic}
              onChange={handleChange}
              required
            />
          </label>

          <div className="row">
            <label>Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>

            <label>Language:
              <input
                type="text"
                name="language"
                placeholder="enter language"
                value={formData.language}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>Towns Near You:</label>
          <input
            type="text"
            name="townsNearYou"
            placeholder="enter town 1"
            value={formData.townsNearYou[0]}
            onChange={(e) =>
              setFormData({ ...formData, townsNearYou: [e.target.value, formData.townsNearYou[1]] })
            }
            required
          />
          <input
            type="text"
            placeholder="enter town 2"
            value={formData.townsNearYou[1]}
            onChange={(e) =>
              setFormData({ ...formData, townsNearYou: [formData.townsNearYou[0], e.target.value] })
            }
            required
          />
        </div>

        <div className="section driving-license">
          <label>Photo of Driving License</label>
          <label>Front Side Photo:
            <input
              type="file"
              onChange={e => setFrontPhoto(e.target.files[0])}
              required
            />
          </label>
          <button className="btn add">Add</button>
          <button className="btn edit">Edit</button>

          <label>Back Side Photo:
            <input
              type="file"
              onChange={e => setBackPhoto(e.target.files[0])}
              required
            />
          </label>
          <button className="btn add">Add</button>
          <button className="btn edit">Edit</button>
        </div>

        <div className="section vehicle-classes">
          <label>Drivable Vehicle Classes:</label>
          <div className="vehicle-options">
            <label><input type="checkbox" name="vehicle-classes" value="Light Motor Cycle - A1" onChange={handleChange} /> Light Motor Cycle - A1</label>
            <label><input type="checkbox" name="vehicle-classes" value="Motorcycle - A" onChange={handleChange} /> Motorcycle - A</label>
            <label><input type="checkbox" name="vehicle-classes" value="Motor Tricycle - B1" onChange={handleChange} /> Motor Tricycle - B1</label>
            <label><input type="checkbox" name="vehicle-classes" value="Dual Purpose Motor Vehicle - B" onChange={handleChange} /> Dual Purpose Motor Vehicle - B</label>
            <label><input type="checkbox" name="vehicle-classes" value="Light Motor Lorry - C1" onChange={handleChange} /> Light Motor Lorry - C1</label>
            <label><input type="checkbox" name="vehicle-classes" value="Motor Lorry - C" onChange={handleChange} /> Motor Lorry - C</label>
            <label><input type="checkbox" name="vehicle-classes" value="Heavy Motor Lorry - CE" onChange={handleChange} /> Heavy Motor Lorry - CE</label>
            <label><input type="checkbox" name="vehicle-classes" value="Light Motor Coach - D1" onChange={handleChange} /> Light Motor Coach - D1</label>
            <label><input type="checkbox" name="vehicle-classes" value="Motor Coach - D" onChange={handleChange} /> Motor Coach - D</label>
            <label><input type="checkbox" name="vehicle-classes" value="Heavy Motor Coach - DE" onChange={handleChange} /> Heavy Motor Coach - DE</label>
            <label><input type="checkbox" name="vehicle-classes" value="Hand Tractors - G1" onChange={handleChange} /> Hand Tractors - G1</label>
            <label><input type="checkbox" name="vehicle-classes" value="Agricultural Land Vehicle - G" onChange={handleChange} /> Agricultural Land Vehicle - G</label>
            <label><input type="checkbox" name="vehicle-classes" value="Special Purpose Vehicle - J" onChange={handleChange} /> Special Purpose Vehicle - J</label>
          </div>
        </div>

        <div className="section driving-experience">
          <label>If you have driving experience:</label>
          <div className="experience-options">
            <label><input type="radio" name="experience" onChange={() => handleDrivingExperience(true)} /> Yes</label>
            <label><input type="radio" name="experience" onChange={() => handleDrivingExperience(false)} /> No</label>
          </div>

          {drivingExperience && (
            <label>Years of experience:
              <input
                type="number"
                name="yearsOfExperience"
                placeholder="add here"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                required
              />
            </label>
          )}
        </div>

        <div className="actions">
          <button type="submit" className="btn submit">Submit</button>
        </div>
      </form>
      
    </div>
  );
}

export default DriverReg;

// =======================================================================================

// import React, { useState } from 'react';
// import './DriverReg.css';

// function DriverReg() {
//   const [setPhoto] = useState(null);
//   const [setFrontPhoto] = useState(null);
//   const [setBackPhoto] = useState(null);
//   const [drivingExperience, setDrivingExperience] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     address: '',
//     drivingLicenseNumber: '',
//     userNic: '',
//     gender: '',
//     language: '',
//     townsNearYou: ['', ''],
//     vehicleClasses: [],
//     hasDrivingExperience: false,
//     yearsOfExperience: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       if (checked) {
//         setFormData({
//           ...formData,
//           vehicleClasses: [...formData.vehicleClasses, value],
//         });
//       } else {
//         setFormData({
//           ...formData,
//           vehicleClasses: formData.vehicleClasses.filter(
//             (vehicleClass) => vehicleClass !== value
//           ),
//         });
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleDrivingExperience = (value) => {
//     setDrivingExperience(value);
//     setFormData({
//       ...formData,
//       hasDrivingExperience: value,
//       yearsOfExperience: value ? formData.yearsOfExperience : '',
//     });
//   };

//   return (
//     <div className="container">
//       <form className="form">
//         <div className="section person-photo">
//           <label>Clear Photo of Person</label>
//           <div className="photo-actions">
//             <input
//               type="file"
//               onChange={(e) => setPhoto(e.target.files[0])}
//               required
//             />
//             <button className="btn add">Add</button>
//             <button className="btn edit">Edit</button>
//           </div>
//         </div>

//         <div className="section personal-info">
//           <div className="row">
//             <label>
//               First Name:
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//             <label>
//               Last Name:
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </div>

//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Mobile Number:
//             <input
//               type="tel"
//               name="mobileNumber"
//               placeholder="Enter Your Mobile Number"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Address:
//             <input
//               type="text"
//               name="address"
//               placeholder="Enter your address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Driving License Number:
//             <input
//               type="text"
//               name="drivingLicenseNumber"
//               placeholder="Enter Your Driving License Number"
//               value={formData.drivingLicenseNumber}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             User NIC:
//             <input
//               type="text"
//               id="nic-input"
//               name="userNic"
//               placeholder="Enter Your NIC"
//               value={formData.userNic}
//               onChange={handleChange}
//               required
//             />
//           </label>

//           <div className="row">
//             <label>
//               Gender:
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </label>

//             <label>
//               Language:
//               <input
//                 type="text"
//                 name="language"
//                 placeholder="enter language"
//                 value={formData.language}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           </div>

//           <label>Towns Near You:</label>
//           <input
//             type="text"
//             name="townsNearYou"
//             placeholder="enter town 1"
//             value={formData.townsNearYou[0]}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 townsNearYou: [e.target.value, formData.townsNearYou[1]],
//               })
//             }
//             required
//           />
//           <input
//             type="text"
//             placeholder="enter town 2"
//             value={formData.townsNearYou[1]}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 townsNearYou: [formData.townsNearYou[0], e.target.value],
//               })
//             }
//             required
//           />
//         </div>

//         <div className="section driving-license">
//           <label>Photo of Driving License</label>
//           <label>
//             Front Side Photo:
//             <input
//               type="file"
//               onChange={(e) => setFrontPhoto(e.target.files[0])}
//               required
//             />
//           </label>
//           <button className="btn add">Add</button>
//           <button className="btn edit">Edit</button>

//           <label>
//             Back Side Photo:
//             <input
//               type="file"
//               onChange={(e) => setBackPhoto(e.target.files[0])}
//               required
//             />
//           </label>
//           <button className="btn add">Add</button>
//           <button className="btn edit">Edit</button>
//         </div>

//         <div className="section vehicle-classes">
//           <label>Drivable Vehicle Classes:</label>
//           <div className="vehicle-options">
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Light Motor Cycle - A1"
//                 onChange={handleChange}
//               />{' '}
//               Light Motor Cycle - A1
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Motorcycle - A"
//                 onChange={handleChange}
//               />{' '}
//               Motorcycle - A
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Motor Tricycle - B1"
//                 onChange={handleChange}
//               />{' '}
//               Motor Tricycle - B1
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Dual Purpose Motor Vehicle - B"
//                 onChange={handleChange}
//               />{' '}
//               Dual Purpose Motor Vehicle - B
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Light Motor Lorry - C1"
//                 onChange={handleChange}
//               />{' '}
//               Light Motor Lorry - C1
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Motor Lorry - C"
//                 onChange={handleChange}
//               />{' '}
//               Motor Lorry - C
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Heavy Motor Lorry - CE"
//                 onChange={handleChange}
//               />{' '}
//               Heavy Motor Lorry - CE
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Light Motor Coach - D1"
//                 onChange={handleChange}
//               />{' '}
//               Light Motor Coach - D1
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Motor Coach - D"
//                 onChange={handleChange}
//               />{' '}
//               Motor Coach - D
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Heavy Motor Coach - DE"
//                 onChange={handleChange}
//               />{' '}
//               Heavy Motor Coach - DE
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Hand Tractors - G1"
//                 onChange={handleChange}
//               />{' '}
//               Hand Tractors - G1
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Agricultural Land Vehicle - G"
//                 onChange={handleChange}
//               />{' '}
//               Agricultural Land Vehicle - G
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 name="vehicle-classes"
//                 value="Special Purpose Vehicle - J"
//                 onChange={handleChange}
//               />{' '}
//               Special Purpose Vehicle - J
//             </label>
//           </div>
//         </div>

//         <div className="section driving-experience">
//           <label>Do you have driving experience?</label>
//           <div className="experience-options">
//             <label>
//               <input
//                 type="radio"
//                 name="drivingExperience"
//                 value="yes"
//                 onClick={() => handleDrivingExperience(true)}
//                 required
//               />{' '}
//               Yes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="drivingExperience"
//                 value="no"
//                 onClick={() => handleDrivingExperience(false)}
//                 required
//               />{' '}
//               No
//             </label>
//           </div>
//           {drivingExperience && (
//             <label>
//               If yes, how many years?
//               <input
//                 type="number"
//                 name="yearsOfExperience"
//                 placeholder="Years of experience"
//                 value={formData.yearsOfExperience}
//                 onChange={handleChange}
//                 required
//               />
//             </label>
//           )}
//         </div>

//         <div className="actions">
//           <button type="submit" className="btn submit">
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default DriverReg;
