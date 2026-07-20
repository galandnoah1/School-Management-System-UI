import Modal from "../../../components/Modal";

export default function Classroom()
{
    return (
        <div className="classroom">
            <p>Les classes ne sont pas encores disponibles</p>
            <Modal
                open={true}
                title={"Ajouter une classe"}
                footer={<button className="btn primary" >Ajouter</button>}
            />
        </div>
    );
}