export class PetFilter extends React.Component {

    state = {
        filterBy : {
            name: '',
            power: null
        }
    };

    handleChange = (ev) => {
        const callback = () => {
            this.props.setFilter(this.state.filterBy);
        };
        
        const filterBy = {...this.state.filterBy}
        filterBy[ev.target.name] = ev.target.value;

        this.setState({filterBy}, callback);
    };

    render() {
        return <section className="pet-filter">
            <input type="text" name="name"
                value={this.state.filterBy.name}
                placeholder="Filter by name"
                autoComplete="off"
                onChange={this.handleChange} />
        </section>;
    }

}