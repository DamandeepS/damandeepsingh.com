Polymer({
	is: 'greeting-page',
	properties: {
		welcomeText: {
			type: String,
			value: 'Hello and Welcome'
		},
		welcomeTextBody: {
			type: String,
			value: 'This is my personal website, a small space on this extraordinary vast cyber universe.'
		},
		data: {
			type: Array,
			value: [{
				icon: 'facebook',
				href: 'https://www.facebook.com/DamandeepSinghOfficial'
			},{
				icon: 'linkedin',
				href: 'http://in.linkedin.com/in/damandeepsinghofficial'
			},{
				icon: 'twitter',
				href: 'http://www.twitter.com/damandeepsingh_'
			},{
				icon: 'googleplus',
				href: 'http://plus.google.com/+DamandeepSingh1'
			},{
				icon: 'instagram',
				href: 'https://instagram.com/damandeepsingh1/'
			},{
				icon: 'github',
				href: 'https://github.com/damandeeps/'
			}]
		}
	}
});