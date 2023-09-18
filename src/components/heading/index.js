"use client"
import { Logo } from "../../../public/svgs"
import { InputText } from "primereact/inputtext";
import "../../../public/css/header.css"
const Heading = () => {
  return (
    <div className="header">
      <span className="spin-span">
      <Logo/>
      </span>
        <span className="p-input-icon-left">
    <i className="pi pi-search" />
    <InputText placeholder="Search" />
</span>
    </div>
  )
}

export default Heading