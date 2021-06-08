import React,{useState} from 'react';
import{connect} from 'react-redux';
import {pay} from '../../actions'
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}
const __DEV__ = document.domain === 'localhost'

function Payment() {
	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:4000/payment', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_43bZgZ9iXkf7MQ' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			  
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

	return (
		<div className="App">
			<header className="App-header">
			 
				{/* <p>
					Edit <code>src/App.js</code> and save to reload.
				</p> */}
				<button className="App-link"
					onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer">pay</button>
					
			 
			</header>
		</div>
	)
}
// class Payment extends React.Component{
//     pay=()=>{
//         const user ={phoneNumber:this.props.auth.user.phoneNumber}
//         this.props.pay(user)
//     }
//     render(){
        
//         return(
//             <div>{this.props.auth.user.approved?(<button onClick={()=>{this.pay()}}> clik here to pay</button>)
//             :(<div>you can only pay after approval of form</div>)}</div>)}
// }

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});
export default connect(mapStateToProps,{pay})(Payment);