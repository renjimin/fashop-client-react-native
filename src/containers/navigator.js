import React from "react";
import { createStackNavigator } from "react-navigation";
import { ThemeStyle } from "../utils/publicStyleModule";
import CardStackStyleInterpolator from 'react-navigation/src/Views/StackView/StackViewStyleInterpolator';

import IndexView from "../pages/index";

import GoodsDetail from "../pages/category/goodsDetail";
import OrderAction from "../pages/category/orderAction";

import UserLogin from "../pages/user/login";
import UserRegister from "../pages/user/register";
import UserAddressAdd from "../pages/user/address/add";
import UserAddressEdit from "../pages/user/address/edit";
import UserAddressList from "../pages/user/address/list";

import CartOrderFill from "../pages/cart/orderFill";

import OrderList from "../pages/order/list";
import OrderDetail from "../pages/order/detail";

import RefundDetail from "../pages/refund/detail";
import RefundList from "../pages/refund/detail";
import RefundLogisticsFill from "../pages/refund/logisticsFill";
import RefundServiceApply from "../pages/refund/serviceApply";
import RefundServiceType from "../pages/refund/serviceType";

import AddressAdd from "../pages/address/add";
import AddressEdit from "../pages/address/edit";
import AddressList from "../pages/address/list";

// CardStackStyleInterpolator.forVertical
const modalStyleStackNames = [
    // 'UserLogin',
]


const indexNavigationOptions = ({ navigation }) => ({
    'Home': {
        header: null,
        // title:'首页',
    },
    'Category': {
        title: '分类'
    },
    'ShopCart': {
        title: '购物车',
    },
    'User': {
        title: '我的',
    },
})

export default createStackNavigator(
    {
        IndexView: {
            screen: IndexView,
            navigationOptions: ({ navigation }) => {
                return indexNavigationOptions({ navigation })[navigation.state.routes[navigation.state.index].routeName]
            }
        },
        // category
        GoodsDetail: {
            screen: GoodsDetail,
            navigationOptions: {
                title: '商品详情'
            }
        },
        OrderAction: {
            screen: OrderAction,
            navigationOptions: {
                title: '提交订单'
            }
        },
        // user
        UserLogin: {
            screen: UserLogin,
            navigationOptions: {
                title: '登录'
            }
        },
        UserRegister: {
            screen: UserRegister,
            navigationOptions: {
                title: '注册'
            }
        },
        UserAddressAdd: {
            screen: UserAddressAdd,
            navigationOptions: {
                title: '收货地址添加'
            }
        },
        UserAddressEdit: {
            screen: UserAddressEdit,
            navigationOptions: {
                title: '收货地址修改'
            }
        },
        UserAddressList: {
            screen: UserAddressList,
            navigationOptions: {
                title: '收货地址列表'
            }
        },
        // cart
        CartOrderFill: {
            screen: CartOrderFill,
            navigationOptions: {
                title: '提交订单'
            }
        },
        // order
        OrderList: {
            screen: OrderList,
            navigationOptions: {
                title: '订单列表'
            }
        },
        OrderDetail: {
            screen: OrderDetail,
            navigationOptions: {
                title: '订单详情'
            }
        },
        // refund
        RefundDetail: {
            screen: RefundDetail,
            navigationOptions: {
                title: '退款详情'
            }
        },
        RefundList: {
            screen: RefundList,
            navigationOptions: {
                title: '退款列表'
            }
        },
        RefundLogisticsFill: {
            screen: RefundLogisticsFill,
            navigationOptions: {
                title: '填写退款物流信息'
            }
        },
        RefundServiceApply: {
            screen: RefundServiceApply,
            navigationOptions: {
                title: '退款申请'
            }
        },
        RefundServiceType: {
            screen: RefundServiceType,
            navigationOptions: {
                title: '选择售后服务类型'
            }
        },
        // address
        AddressAdd: {
            screen: AddressAdd,
            navigationOptions: {
                title: '收货地址添加'
            }
        },
        AddressEdit: {
            screen: AddressEdit,
            navigationOptions: {
                title: '收货地址修改'
            }
        },
        AddressList: {
            screen: AddressList,
            navigationOptions: {
                title: '收货地址列表'
            }
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            // headerTintColor: ThemeStyle.ThemeColor,
            headerBackTitle: null,
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: "#fff",
                elevation: 0,//去掉安卓阴影
                borderBottomWidth: 0.5,
                borderBottomColor: '#dcdcdc',
            },
            headerTintColor: '#000',
        }),
        headerTransitionPreset: 'uikit',
        mode: "card",
        // ...Platform.select({
        //     ios: {
        //         headerMode: 'screen',
        //     },
        //     android: {
        //         headerMode: 'screen',
        //     },
        // }),
        transitionConfig: (e) => ({
            screenInterpolator: (sceneProps) => {
                const { scene } = sceneProps;
                const { route } = scene;
                if (modalStyleStackNames.includes(route.routeName)) {
                    return CardStackStyleInterpolator.forVertical(sceneProps);
                }
                return CardStackStyleInterpolator.forHorizontal(sceneProps);
            }
        })
    }
)
