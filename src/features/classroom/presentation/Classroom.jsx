import { Edit, Layers, Plus, Trash } from "lucide-react";
import { useState } from "react";
import EmptyState from "../../../components/EmptyState";
import Modal from "../../../components/Modal";
import { classroomService } from "../service/ClassroomService";
import "./Classroom.css"

export default function Classroom() {
  const [classrooms, setClassrooms] = useState([
    {
        "id": crypto.randomUUID(),
        "name": "Tle C",
        "size": 60,
        "section": "francophone",
        "repartition": null,
        "speciality": "C",
        "lv2": null
    },
       {
        "id": crypto.randomUUID(),
        "name": "Form 1",
        "size": 12,
        "section": "anglophone",
        "repartition": null,
        "speciality": null,
        "lv2": null
    }
  ]);
  const [modal, setModal] = useState(false);
  const [currentSection, setSection] = useState("tout");
  const sections = [
    {
      id: "1",
      name: "anglophone",
    },
    {
      id: "2",
      name: "francophone",
    },
  ];
  const [form, setForm] = useState({
    "level": "",
    "speciality": "",
    "lv2": "",
    "repartition": "",
    "section": "",
  })
  const levels = [
    "Tle",
    "P",
    "2nde"
  ]
  const series = [
    "C",
    "D",
    "A4"
  ]
  const lv2s = [
    "All",
    "Esp"
  ]
  const repartitions = ["A", "B"]

  return (
    <div className="classe-page">
      <header>
        <div>
          <h1 className="page-title">Gestion des classes</h1>
          <div className="page-sub">
            {classrooms.length} classes au total
          </div>
        </div>

        <button
          className="btn primary"
          onClick={() => {
            setModal(true);
          }}
        >
          <Plus size={15} />
          <span>Ajouter une classe</span>
        </button>
      </header>

      <main>
        <section className="card">
          <div className="card-body">
            <div className="section-tabs">
                <button className={`btn small${currentSection.toLowerCase() == "tout" ? " active" : ""}`}
                  onClick={() => setSection("tout")}
                >
                    Tout
                </button>
              {sections.map((section) => (
                <button
                  className={`btn small${currentSection.toLowerCase() == section.name.toLowerCase() ? " active" : ""} ${section.name.toLowerCase() === "anglophone" ? " anglophone" : " fracophone"}`}
                  key={section.id}
                  onClick={() => setSection(section.name.toLowerCase())}
                >
                  <span>{section.name.toLowerCase()}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="table-wrap">
            {classrooms.length === 0 ? (
              <EmptyState
                icon={Layers}
                title="Aucune classe"
                sub="Aucune classe pour ce cycle"
              />
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Classe</th>
                    <th>Section</th>
                    <th>Effectif</th>
                    <th>Supprimer</th>
                    <th>Modifier</th>
                  </tr>
                </thead>

                <tbody>
                  {classrooms.map((classroom) => (
                    <tr key={classroom.id}>
                      <td>
                        <span style={{ fontWeight: 700, fontSize: 14 }}>
                          {classroom.name}
                        </span>
                      </td>

                      <td>
                        <span>{classroom.section}</span>
                      </td>

                      <td>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {classroom.size}
                        </div>
                      </td>

                      <td> 
                        <Trash
                          size={15}
                          color="red"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => classroomService.delete(classroom.id)}
                        />
                      </td>
                      
                      <td>
                        <Edit
                          size={15}
                          color="blue"
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={() => classroomService.update(classroom.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>

        <Modal
          open={modal}
          onClose={() => setModal(false)}
          title="Ajouter une classe"
          footer={
            <>
              <button className="btn secondary" onClick={() => setModal(false)}>
                Annuler
              </button>
              <button className="btn primary" onClick={() => {
                classroomService.create()
                setModal(false)
              }}>
                <Plus size={15} />
                Ajouter
              </button>
            </>
          }
        >
          <>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Niveau</label>

                <select
                  className="form-control"
                  value={form.level}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      level: e.target.value,
                    }))
                  }
                >
                  <option value=""></option>
                  {levels.map((level, i) => (
                    <option key={i} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Serie</label>

                <select
                  className="form-control"
                  value={form.speciality}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      speciality: e.target.value,
                    }))
                  }
                >
                  <option value=""></option>
                  {series.map((serie,i) => (
                    <option key={i} value={serie}>
                      {serie}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">LV2</label>

                <select
                  className="form-control"
                  value={form.lv2}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      lv2: e.target.value,
                    }))
                  }
                >
                  <option value=""></option>
                  {lv2s.map((lv2, i) => (
                    <option key={i} value={lv2}>
                      {lv2}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Section</label>

                <select
                  className="form-control"
                  value={form.section}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      section: e.target.value,
                    }))
                  }
                >
                  <option value=""></option>
                  {sections.map((section) => (
                    <option key={section.id} value={section.name}>
                      {section.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Repartition</label>

                <select
                  className="form-control"
                  value={form.repartition}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      repartition: e.target.value,
                    }))
                  }
                >
                  <option value=""></option>
                  {repartitions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        </Modal>
      </main>
    </div>
  );
}
