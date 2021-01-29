import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const AddUser = () => {
	let history = useHistory()
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		phone: '',
		website: '',
	})
	const onInputChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const { name, username, email, phone, website } = user

	const submitForm = async (e) => {
		e.preventDefault(e)
		await axios.post('http://localhost:3004/users', user)
		history.push('/')
	}
	return (
		<div className='container'>
			<div className='wx-75 mx-auto shadow p-5'>
				<h2 className='text-center mb-4'>Add User</h2>
				<form onSubmit={(e) => submitForm(e)}>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Name'
							name='name'
							value={name}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Username'
							name='username'
							value={username}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Email address'
							name='email'
							value={email}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Phone number'
							name='phone'
							value={phone}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<div className='form-group'>
						<input
							type='text'
							className='form-control form-control-lg'
							placeholder='Enter your Website Name'
							name='website'
							value={website}
							onChange={(e) => onInputChange(e)}
						/>
					</div>
					<button className='btn btn-primary btn-block'>Add User</button>
				</form>
			</div>
		</div>
	)
}

export default AddUser
