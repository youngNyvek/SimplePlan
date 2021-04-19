export class PlanModel {
    name = 'Plans';
    props= {
        month: 'string',
        year: 'string',
    }
}

export class ExpensesModel{
    name= 'Expenses'
    props= {
        name: 'string',
        value: 'int',
        plan_id: '#Plans'
    }
}

export class RevenueModel{
    name= 'Revenue'
    props= {
        name: 'string',
        value: 'int',
        plan_id: '#Plans'
    }
}