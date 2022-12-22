import { Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
        showLabel: false,
        style: {
          backgroundColor: "green",
          elevation: 10,
        },
      }}
    >
      {/* <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            // <MaterialCommunityIcons
            //   name="home"
            //   color={focused ? COLORS.primary : color}
            //   size={32}
            // />
          ),
        }}
      />
      <BottomTab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarIcon: ({ focused, color }) => (
            // <Entypo
            //   name="bar-graph"
            //   color={focused ? COLORS.primary : color}
            //   size={26}
            // />
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            // <FontAwesome5
            //   name="wallet"
            //   color={focused ? COLORS.primary : color}
            //   size={24}
            // />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color }) => (
            // <MaterialIcons
            //   name="person"
            //   color={focused ? COLORS.primary : color}
            //   size={32}
            // />
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
};

export default BottomTabNav