import { PetPreview } from "./PetPreview.jsx";

export function PetList({ pets, onRemove }) {

    return (
        <section className="pet-list">
            {pets.map(pet => {
                return <PetPreview key={pet.id} pet={pet}
                    onRemove={onRemove} />;
            })
            }
        </section>
    );
}