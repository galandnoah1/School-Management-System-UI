import { useState } from "react";
import { Users, Trash, UserPlus2, Save, Edit } from "lucide-react";
import EmptyState from "../../../components/EmptyState";
import Modal from "../../../components/Modal";
import "./Student.css";

export default function Student() {
  const [modal, setModal] = useState(false);
  const [form, setform] = useState({
    firstname: "",
    lastname: "",
    matricule: "",
    sex: "",
    classId: "",
  });
  const [students, setStudents] = useState([
    {
      id: crypto.randomUUID(),
      firstname: "BOUNOUNG",
      lastname: "VICTOIRE",
      matricule: "23IQW",
      sex: "M",
      classroom: "6e B",
    },
  ]);
  const [classrooms, setClassrooms] = useState([]);
  const [filter, setFilter] = useState();
  const [editData, setEdita] = useState(false);
  const [academicyear, setAcademicyeaer] = useState([]);

  return (
    <div className="student-page">
      <header>
        <div>
          <h1 className="page-title">Gestion des eleves</h1>
          <div className="page-sub">{students.length} eleves au total</div>
        </div>

        <button
          className="btn primary"
          onClick={() => {
            setModal(true);
          }}
        >
          <UserPlus2 size={15} />
          <span>Ajouter un eleve</span>
        </button>
      </header>

      <main className="card">
        <div className="card-body" style={{ paddingBottom: 0 }}>
          <div className="toolbar">
            <select
              className="toolbar-select"
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value === "Toutes" ? "" : e.target.value);
              }}
            >
              <option value="">Filtrer les eleves par classe</option>
              {classrooms.map((classroom) => (
                <option key={classroom.id} value={classroom.id}>
                  {classroom.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {students.length === 0 ? (
          <EmptyState
            icon={Users}
            title="Aucun eleve trouve"
            description="Ajustez les filtres ou ajoutez un nouvel eleve"
          />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom complet</th>
                  <th>Matricule</th>
                  <th>Classe</th>
                  <th>Sexe</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student, i) => (
                  <tr key={student.id}>
                    <td style={{ color: "#94a3b8", fontSize: 12 }}>{i + 1}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 600, fontSize: 13.5 }}>
                            {student.lastname.toUpperCase()}{" "}
                            {student.firstname.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>{student.matricule || "F30264"}</span>
                    </td>
                    <td>
                      <span>{student.classroom}</span>
                    </td>
                    <td>
                      <span>{student.sex}</span>
                    </td>
                    <td>
                      <Edit
                        size={15}
                        color="blue"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </td>
                    <td>
                      <Trash
                        size={15}
                        color="red"
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <Modal
          open={modal}
          onClose={() => setModal(false)}
          title={
            editData
              ? "Modifier les informations de l'eleve"
              : "Ajouter un eleve"
          }
          footer={
            <>
              <button className="btn secondary" onClick={() => setModal(false)}>
                Annuler
              </button>
              <button className="btn primary">
                <Save size={15} />
                {editData ? "Enregistrer" : "Ajouter"}
              </button>
            </>
          }
        >
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Nom</label>
              <input
                className="form-control"
                placeholder="Nom de l'eleve"
                value={form.lastname}
                onChange={(e) =>
                  setform((f) => ({ ...f, lastname: e.target.value }))
                }
              />
            </div>
            <div className="form-group">
              <label className="form-label">Prenom</label>
              <input
                className="form-control"
                placeholder="Prenom de l'eleve"
                value={form.firstname}
                onChange={(e) =>
                  setform((f) => ({ ...f, firstname: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Sexe</label>
              <select
                className="form-control"
                value={form.sex}
                onChange={(e) =>
                  setform((f) => ({ ...f, sex: e.target.value }))
                }
              >
                <option value=""></option>
                <option value="M">Masculin</option>
                <option value="F">Feminin</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Classe</label>
              <select
                className="form-control"
                value={form.classId}
                onChange={(e) => {
                  setform((f) => ({ ...f, classId: e.target.value }));
                }}
              >
                <option value=""></option>
                {classrooms.map((classe) => (
                  <option key={classe.id} value={classe.id}>
                    {classe.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Annee academique</label>
              <select
                className="form-control"
                value={form.academicYearId}
                onChange={(e) => {
                  setform((f) => ({
                    ...f,
                    academicYearId: e.target.value,
                  }));
                }}
              >
                <option value=""></option>
                {academicyear.map((year) => (
                  <option key={year.id} value={year.id}>
                    {year.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Modal>
      </main>
    </div>
  );
}
