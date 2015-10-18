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
		}
	},
	ready: function() {
		this.$.fbCoverService.generateRequest();
	},
	_gotCoverPic: function(e,resp) {
		this.set('_coverPicUrl', resp.response.cover.source);
	}
});