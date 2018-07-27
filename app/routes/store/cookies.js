import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
			{
				cookieName:'Chocolate Chip',
				count:'248',
				price: '0.39'
			},
			{
				cookieName:'Sugar',
				count:'182',
				price: '0.30'
			},
			{
				cookieName:'Oatmeal',
				count:'137',
				price: '0.42'
			},
			{
				cookieName:'Peanut Butter',
				count:'186',
				price: '0.47'
			},
			{
				cookieName:'Shortbread',
				count:'93',
				price: '0.35'
			}
		]
	}
});
