import VasernDB from './db';

const Plans  = VasernDB.get('Plans');
const Revenue = VasernDB.get('Revenue');
const Expenses = VasernDB.get('Expenses');

export default VasernDB;

export { Plans, Revenue, Expenses};
