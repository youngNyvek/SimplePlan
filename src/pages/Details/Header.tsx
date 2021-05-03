import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import { Plans } from '../../database/vasernIndex';

// import { Container } from './styles';
interface IHeader {
    itemId: any
}
interface ItemPlan {
   id: string, 
   month: string, 
   year:string, 
   expenseValue: string, 
   revenueValue: string 
}

const Header: React.FC<IHeader> = ({itemId}) => {

    const [ItemPlan, setItemPlan] = useState<ItemPlan>();
    const [Balance, setBalance] = useState(0);

    function getItens() {
        let plans: any = Plans.get(itemId);
        let item: ItemPlan = { id: plans.id, month: plans.month, year: plans.year, expenseValue: plans.expenseValue, revenueValue: plans.revenueValue };
        const ex = +item.expenseValue;
        const rev = +item.revenueValue;

        setBalance(rev - ex);
        setItemPlan(item);
      }
    useEffect(() =>{
        getItens();
    }, [])
    return (
        <View style={{
            backgroundColor: '#292929',
            width: '100%',
            height: 160,
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20
        }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25 }}>
                    {ItemPlan?.month.toLocaleUpperCase()} {ItemPlan?.year}
                </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Icons
                        color="#bf4949"
                        name="chevrons-down"
                        size={25}
                    />
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25 }}>
                        {ItemPlan?.expenseValue}
                    </Text>
                </View>
                <View style={{ flex: 1 , flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Icons
                        color="#72bf49"
                        name="dollar-sign"
                        size={25}
                    />
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25 }}>
                     {ItemPlan?.revenueValue}
                    </Text>
                </View>
                <View style={{ flex: 1 , flexDirection: 'row',alignItems: 'center', justifyContent: 'center'}}>
                    <Icons
                        color="#72bf49"
                        name="chevrons-up"
                        size={25}
                    />
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 25 }}>
                        {Balance}
                    </Text>
                </View>

            </View>

        </View>
    )
}

export default Header;