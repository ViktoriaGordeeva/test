const { Link } = ReactRouterDOM;


export function PetPreview({ pet, onRemove }) {

    return <article className="pet-preview">
        <Link to={`/pet/${pet.id}`}>
            <h1>{pet.name}</h1>
            <img src={`assets/img/${pet.name}.png`} />
        </Link>
        <h2>Power: {pet.power}</h2>
        <div>
            <Link to={`/pet/edit/${pet.id}`}>Edit Pet</Link>
            <button onClick={() => {
                onRemove(pet.id)
            }}
            >Remove</button>
        </div>

    </article>

}