export default Ember.Route.extend({
    model: function () {
        var todos = this.store.find('todo');
        console.log(todos);
        return todos;
    }
});
