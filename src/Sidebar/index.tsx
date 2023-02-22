import react from "react";
import { Form } from "../Form";
import { FormValues, InputForm } from "../Form/useForm";
import { Input } from "../Input";
import { Select } from "../Select";
import styles from "./styles.module.css";

const siderbarForm: InputForm[] = [
  {
    id: "01",
    label: "Nombre",
    value: "",
    name: "name",
    placeholder: "",
    type: "text",
  },
  {
    id: "02",
    label: "Apellido",
    value: "",
    name: "surname",
    placeholder: "",
    type: "text",
  },
  {
    id: "03",
    label: "DPI del paciente",
    value: "",
    name: "dpi",
    placeholder: "",
    type: "text",
  },
  {
    id: "04",
    label: "Correo Electrònico",
    value: "",
    name: "email",
    placeholder: "",
    type: "text",
  },
  {
    id: "05",
    label: "Numero de telefono",
    value: "",
    name: "phoneNumber",
    placeholder: "",
    type: "text",
  },
];

const Sidebar = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <Form
        id="form"
        title="Agendar nueva cita"
        initialState={siderbarForm}
        onSubmit={onSubmit}
      >
        Registre la cita del paciente
      </Form>
      <OptionSidebar />
      <button type="submit"></button>
    </div>
  );
};

export default Sidebar;

const OptionSidebar = () => {
  return (
    <div className={styles.containerOption}>
      Opciones
      <div className={styles.menuOption}>
        <div className={styles.itemOption}>
          <i>ICON</i>
          <label className={styles.option}>
            Hora de la cita
            
            <Input type="datetime-local" id="" value="" onChange={() => {}} placeholder="" />
          </label>
        </div>
        <div className={styles.itemOption}>
          <input type="checkbox" />
          <label className={styles.option}>
            Recordatorio
            <Select
            id=''
            name=''
            value=''
            onChange={()=> {}}
            placeholder=''
            />
          </label>
        </div>
        <div className={styles.itemOption}>
          <input type="checkbox" />
          <label className={styles.option}>
            Marcar como prioridad
            <p>Marca la opción si consideras que esta cita es prioridad</p>
          </label>
        </div>
      </div>
    </div>
  );
};
