
const DEFAULT_DAY = "Número de día inválido";

/**
 * Devuelve el día de la semana usando switch.
 */
export const getDayOfWeekSC = (day) => {
    switch (day) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return DEFAULT_DAY;
    }
};

/**
 * Objeto con los días de la semana.
 */
let dayOfWeek = {
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado",
    7: "Domingo"
};

/**
 * Devuelve el día usando el objeto.
 */
export const getDayOfWeekObject = (day) => {
    if (day < 1 || day > 7 || !Number.isInteger(day)) {
        return DEFAULT_DAY;
    }
    return dayOfWeek[day];
};

/************************************************/

const DEFAULT_OPERARTOR_ERROR = "Operator invalid";

/**
 * Calculadora usando switch.
 */
export const simpleCalculatorSC = (operator, num_1, num_2) => {
    switch (operator) {
        case "+":
            return num_1 + num_2;
        case "-":
            return num_1 - num_2;
        case "*":
            return num_1 * num_2;
        case "/":
            return num_1 / num_2;
        default:
            return DEFAULT_OPERARTOR_ERROR;
    }
};

/**
 * Objeto con las operaciones básicas.
 */
let calculatorObject = {
    "+": (num_1, num_2) => num_1 + num_2,
    "-": (num_1, num_2) => num_1 - num_2,
    "*": (num_1, num_2) => num_1 * num_2,
    "/": (num_1, num_2) => num_1 / num_2
};

/**
 * Calculadora usando el objeto.
 */
export const simpleCalculatorObject = (operator, num_1, num_2) => {
    if (!calculatorObject[operator]) {
        return DEFAULT_OPERARTOR_ERROR;
    }
    return calculatorObject[operator](num_1, num_2);
};
