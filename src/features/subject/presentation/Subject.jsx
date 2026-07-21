import { BookPlus,  Text, } from "lucide-react";
import "../../student/presentation/Student.css"
import EmptyState from "../../../components/EmptyState";
import Modal from "../../../components/Modal";
import { useState } from "react";
import { levels, specialities } from "../../../constants/constants";


export default function Subject() {

  const [modal, setModal] = useState(false)
  const [addCoefficient, setAddCoefficient] = useState(false)
  const [subjects, setSubjects] = useState([])
  const [filter, setFilter] = useState({
    level_id: ""
  })
  const [coefficients, setCoefficients] = useState([])


  return (
    <div className="subject-page">
      <header>
        <div>
          <h1 className="page-title">
            Gestion des matieres
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <button
            className="btn primary"
            onClick={() => {
              setModal(true)
            }}
          >
            <BookPlus size={15} />
            <span>Ajouter une matiere</span>
          </button>

          <button
            className="btn primary"
            onClick={() => {
              setModal(true)
            }}
          >

            <span>Definir le coefficient d'une matiere</span>
          </button>
        </div>
      </header>

      <main style={{
        display: "flex",
        gap: "10px"
      }}>
        <div className="card">
          <div className="card-header">
            {/* <div className="section-tabs">
              {sections.map((section) => (
                <button
                  className={`btn small${section_.toLowerCase() == section.name.toLowerCase() ? " active" : ""} ${section.name.toLowerCase() === "anglophone" ? " anglophone" : " fracophone"}`}
                  key={section.id}
                  onClick={() => setSection(section.name.toLowerCase())}
                >
                  <span>{section.name.toLowerCase()}</span>
                </button>
              ))}
            </div> */}
          </div>
          {
            subjects.length == 0
              ?
              (<EmptyState
                icon={Text}
                title="Aucune matiere trouvee"

              />)
              :
              (<div className="table-wrap">

                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Matieres</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      subjects.map((subject, i) => (<tr key={subject.id}>
                        <td>
                          {i + 1}
                        </td>
                        <td>
                          {subject.name}
                        </td>

                      </tr>))
                    }
                  </tbody>
                </table>

              </div>)
          }

        </div>

        <div className="card"
          style={{
            flex: "1"
          }}
        >
          <div className="card-header">
            <p>Coefficients des matieres par classe</p>
          </div>

          <div className="card-body"
            style={{ paddingBottom: 0 }}
          >

            <div className="toolbar">

              <select
                className="toolbar-select"
                value={filter.levelId}
                onChange={(e) => setFilter((form) => ({ ...form, levelId: e.target.value }))}
              >
                <option value="">Filtrer les matieres par niveau</option>
                {
                  levels.map(level => (
                    <option value={level.id} key={level.id}>
                      {level.name.toUpperCase()}
                    </option>
                  ))
                }
              </select>

              <select
                className="toolbar-select"
                value={filter.specialityId}
                onChange={(e) => setFilter((form) => ({ ...form, specialityId: e.target.value }))}
              >
                <option value="">Filtrer les matieres par serie</option>
                {
                  specialities.map(speciality => (
                    <option value={speciality.id} key={speciality.id}>
                      {speciality.name.toUpperCase()}
                    </option>
                  ))
                }
              </select>

              <button className="btn secondary">
                Filtrer
              </button>
            </div>
          </div>

          {
            coefficients.length == 0
              ?
              (<EmptyState
                icon={Text}
                title="Aucune matiere trouvee"

              />)
              :
              (<div className="table-wrap">

                <table className="table">
                  <thead>
                    <tr>

                      <th>Matieres</th>
                      <th>Niveaux</th>
                      <th>Series</th>
                      <th>Coefficients</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      coefficients.map((subject) => (<tr key={subject.id}>

                        <td>
                          {subject.subject}
                        </td>
                        <td>
                          {subject.level.toUpperCase()}
                        </td>
                        <td>
                          {subject.speciality}
                        </td>
                        <td>
                          {subject.value}
                        </td>
                      </tr>))
                    }
                  </tbody>
                </table>

              </div>)
          }

        </div>
      </main>



      {/**Modal pour ajouter une matiere et definir le coefficient d'une matiere */}
      <Modal
        title={modal ? "Ajout d'une nouvelle matiere" : "Definir le coefficient d'une matiere"}
        open={modal}
        onClose={onClose}
        footer={
          <>
            <button
              className="btn secondary"
              onClick={() => setModal(false)}
            >
              Annuler
            </button>
            <button className="btn primary"
              onClick={() => { subjectModal ? addSubject() : addCoefficient() }}
            >
              {addCoefficient ? "Ajouter" : "Enregistrer"}
            </button>
          </>
        }
      >
        {
          subjectModal ?
            (<div className="form-group">
              <div className="form-label">Nom de la matiere</div>
              <input type="text" className="form-control"
                placeholder="Nom de la matiere"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </div>)
            :
            (<>
              <div className="form-row">

                <div className="form-group">
                  <div className="form-label">Selectionner la matiere</div>
                  <select type="text" className="form-control"
                    value={coefficientForm.subjectId}
                    onChange={(e) => setCoefficientForm((prev) => ({ ...prev, subjectId: e.target.value }))}
                  >
                    <option value="">Matiere</option>
                    {
                      subjects.map(subject => <option value={subject.id} key={subject.id}>{subject.name}</option>)
                    }
                  </select>
                </div>

                <div className="form-group">
                  <div className="form-label">Selectionner le niveau</div>
                  <select type="text" className="form-control"
                    value={coefficientForm.levelId}
                    onChange={(e) => setCoefficientForm((prev) => ({ ...prev, levelId: e.target.value }))}
                  >
                    <option value="">Niveau</option>
                    {
                      levels.map(level => <option value={level.id} key={level.id}>{level.name.toUpperCase()}</option>)
                    }
                  </select>
                </div>

              </div>

              <div className="form-row">

                <div className="form-group">
                  <div className="form-label">Selectionner la serie ou non</div>
                  <select type="text" className="form-control"
                    value={coefficientForm.specialityId}
                    onChange={(e) => setCoefficientForm((prev) => ({ ...prev, specialityId: e.target.value }))}
                  >
                    <option value="">Serie</option>
                    {
                      specialities.map(speciality => <option value={speciality.id} key={speciality.id}>{speciality.name.toUpperCase()}</option>)
                    }
                  </select>
                </div>

                <div className="form-group">
                  <div className="form-label">Coefficient</div>
                  <input type="text" className="form-control"
                    value={coefficientForm.value}
                    placeholder="Entrer le coefficient"
                    onChange={(e) => setCoefficientForm((prev) => ({ ...prev, value: e.target.value }))}
                  />

                </div>

              </div>
            </>
            )
        }

      </Modal>


    </div>
  );
}