const stringArray = [
    '1',
    '2',
    '3',
    "frutta"
];
const parsedArray = (stringArray.filter(n => +n).reduce((a,b) => a + b));

const obj = {
    address: {
        postalCode: '150',
    },
}
const num = (obj?.address?.postalCode);
