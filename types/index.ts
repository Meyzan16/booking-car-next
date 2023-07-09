import { MouseEventHandler } from "react";

//custom data button
export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}


export interface SearchManufacturerProps {
    manufacturer: string;
    setmanufacturer?: (manufaturer: string) => void;
}

//data carCard
export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year: number;
}

// search engine
export interface FilterProps{
    manufacturer: string;
    year: year;
    fuel: string;
    limit: number;
    model: string;
}
 
//tanda tanya artianya opsional