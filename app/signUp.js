import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Loading from "../components/Loading";
import CustomKeyboardView from "../components/CustomKeyboardView";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef("");
  const PasswordRef = useRef("");
  const userNameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !PasswordRef.current ||
      !profileRef.current ||
      !userNameRef.current
    ) {
      Alert.alert("Sign Up", "Please fill all the fields!");
      return;
    }

    // rigister process
  };

  return (
    <CustomKeyboardView>
      <View className="flex-1">
        <StatusBar style="dark" />
        <View
          className="flex-1 gap-12"
          style={{ paddingHorizontal: wp(5), paddingTop: hp(7) }}
        >
          {/* signIn image */}
          <View className="items-center">
            <Image
              style={{ height: hp(20) }}
              resizeMode="contain"
              source={require("../assets/images/register.png")}
            />
          </View>
          <View className="gap-10">
            <Text
              style={{ fontSize: hp(4) }}
              className="font-bold tracking-wider text-center text-neutral-800"
            >
              Sign Up
            </Text>

            {/* inputs */}
            <View className="gap-4">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Feather name="user" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (userNameRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Username"
                  placeholderTextColor={"gray"}
                />
              </View>

              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="mail" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (emailRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Email address"
                  placeholderTextColor={"gray"}
                />
              </View>
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="lock" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (PasswordRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                  secureTextEntry
                />
              </View>

              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Feather name="image" size={hp(2.7)} color="gray" />
                <TextInput
                  onChangeText={(value) => (profileRef.current = value)}
                  style={{ fontSize: hp(2) }}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Profile url"
                  placeholderTextColor={"gray"}
                />
              </View>

              {/* submit button */}

              <View>
                {loading ? (
                  <View className="flex-row justify-center">
                    <Loading size={hp(6.5)} />
                  </View>
                ) : (
                  <Pressable
                    style={{ height: hp(6.5) }}
                    className="bg-indigo-500 rounded-xl justify-center items-center "
                    onPress={handleRegister}
                  >
                    <Text
                      style={{ fontSize: hp(2.7) }}
                      className="text-white font-bold tracking-wider"
                    >
                      Sign Up
                    </Text>
                  </Pressable>
                )}
              </View>

              {/* sign up text */}

              <View className="flex-row justify-center">
                <Text
                  style={{ fontSize: hp(1.8) }}
                  className="font-semibold text-neutral-500"
                >
                  {" "}
                  Already have an account?
                </Text>
                <Pressable onPress={() => router.push("signIn")}>
                  <Text
                    style={{ fontSize: hp(1.8) }}
                    className="font-bold text-indigo-500"
                  >
                    {" "}
                    Sign In
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </CustomKeyboardView>
  );
};

export default SignUp;
