Polymer({
	is: 'drawer-info',
	properties: {
		userImage: {
			type: String
		},
		userName: {
			type: String,
			value: 'Damandeep Singh'
		},
		_userPicUrl: {
			type: String,
			value: 'https://graph.facebook.com/100007475772940/picture'
		}
	},
	ready: function() {
		this.$.userImageService.generateRequest();
	},
	_getImageUrl: function(e,resp) {
		this.set('userImage',resp.response.data.url);
	}
});