import { Images } from "./utils";

export const MenuData = [
    { 
        id:1,
        name: 'Cofee',
        description: 'Freshly breaved cofee',
        image : Images.Cofee1
    },
    {
        id:2,
        name: 'Breakfast',
        description: 'Hearty, hot & Fresh',
        image : Images.BreakFast1
    },
    {
        id:3,
        name: 'Munchies',
        description: 'Perfectly Baked Goodies',
        image : Images.Munchise1
    },
    {
        id:4,
        name: 'Lunch',
        description: 'Hearty, hot & Fresh',
        image : Images.Lunch1
    },
    {
        id:5,
        name: 'Fries',
        description: 'Fresh & Crispy',
        image : Images.Fries1
    },
    {
        id:6,
        name: 'Drinks',
        description: 'Healthy & Fresh',
        image : Images.Drinks1
    }
]

export const CofeeFilters = ['All','Cold Coffee', 'Hot Coffee'];

export const CofeeListData = [
    { 
        id:1,
        name: 'Espresso',
        description: 'Blue Ridge Blend',
        amount: '$4.35',
        image : Images.Cofee1,
        category : 'Cold Coffee'
    },
    {
        id:2,
        name: 'Choco Frappe',
        description: 'Locally Roasted',
        amount: '$10.00',
        image : Images.ChocoFrappe1,
        category : 'Hot Coffee'
    },
    {
        id:3,
        name: 'Espresso Coffee',
        description: 'Blue Ridge Blend Cofee',
        amount: '$5.35',
        image : Images.Cofee2,
        category : 'Cold Coffee'
    },
    {
        id:4,
        name: 'Choco Frappe2',
        description: 'Locally Roasted Coffee',
        amount: '$12.00',
        image : Images.CHOCOFRAPPE2,
        category : 'Hot Coffee'
    },
    {
        id:5,
        name: 'Caramel Frappe',
        description: 'Decaf Colombia',
        amount: '$10.00',
        image : Images.CrameFrappe1,
        category : 'Hot Coffee'
    },
    {
        id:6,
        name: 'Caramel Frappe2',
        description: 'Locally Roasted Coffee',
        amount: '$9.00',
        image : Images.CrameFrappe2,
        category : 'Cold Coffee'
    },
]