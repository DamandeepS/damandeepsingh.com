Polymer({
	is: 'contact-me',
	properties: {
		_coverPicUrl: {
			type: String
		},
		communicationItems: {
			type: Array,
			value: [{
				icon: 'communication:call',
				href: 'tel:+917032855666',
				contact: '(+91) 7032 855 666'
			},{
				icon: 'communication:email',
				href: 'mailto:mail@damandeepsingh.com',
				contact: 'mail@damandeepsingh.com'
			}]
		},
		_coverPicUrl: {
			type: String,
			value: 'images/cover-pic.jpg'
		}
	},
	ready: function() {
	}
});