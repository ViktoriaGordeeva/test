import { petService } from "../services/petService.js";

export class PetEdit extends React.Component {

    state = {
        pet: { name: '', power: 1 }
    };

    refInput = React.createRef();

    componentDidMount() {
        const { petId } = this.props.match.params;
        // console.log('this.elInput:', this.elInput);
        this.refInput.current.focus();
        if (!petId) return;
        petService.getById(petId).then(pet => {
            this.setState({ pet });
        });
    }


    onSavePet = (ev) => {//on submit
        ev.preventDefault();

        if (this.state.pet.power < 1) {
            alert('must choose valid power!');
            return;
        }

        petService.save(this.state.pet)
            .then(savedPet => {
                console.log('Saves succesfully', savedPet);
                this.props.history.push('/pet');
            })

    };

    onInputChange = (ev) => {//on input change
        const value = (ev.target.type === 'number')? +ev.target.value  : ev.target.value;
        const pet = { ...this.state.pet };
        pet[ev.target.name] = value;  
        this.setState({
            pet
        });
    };

    onAnimate = () =>{
        this.refInput.current.classList.add('animate__animated','animate__tada');
        setTimeout(()=>{
            this.refInput.current.classList.remove('animate__animated','animate__tada');
        }, 1000)
    }

    render() {
        return (
            <form onSubmit={this.onSavePet}>

                <input value={this.state.pet.name} ref={this.refInput}
                    placeholder="Name" type="text" name="name"
                    onChange={this.onInputChange} />

                <input value={this.state.pet.power} required
                    placeholder="Power" type="number" name="power"
                    onChange={this.onInputChange} />

                <button type="submit">{(this.state.pet.id)? 'Update' : 'Add'}</button>
                <button type="button" onClick={this.onAnimate}>Animate</button>
            </form>
        );
    }
}
