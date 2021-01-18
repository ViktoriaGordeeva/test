import { petService } from "../services/petService.js";
const { Link } = ReactRouterDOM;


export class PetDetails extends React.Component {

    state = {
        pet: null
    };

    componentDidUpdate(prevProps) {
        console.log('UPDATE', this.props);
        if (prevProps.match.params.petId !== this.props.match.params.petId) {
            this.loadPet()
        }
    }
    componentDidMount() {
        console.log('MOUNT', this.props);
        this.loadPet();
    }

    loadPet() {
        const { petId } = this.props.match.params;
        petService.getById(petId).then(pet => {
            this.setState({ pet });
        });
    }

    onBack = () => {
        this.props.history.goBack()
    };

    render() {
        if (!this.state.pet) return <div>Loading..</div>;

        return (
            <section className="pet-details">
                <h1>Pet Details {this.state.pet.name}</h1>
                <pre>{JSON.stringify(this.state.pet, null, 2)}</pre>

                <hr />
                <button onClick={this.onBack}>Back</button>
            </section>
        );
    }
}
