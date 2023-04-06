import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { colors } from "../utils/theme";
import Add from "../../assets/add.svg";
import ThreePointOptions from "../../assets/threePointsOptions.svg";
import { useNavigate } from "react-router-native";
import ModalGuests from './ModalGuests';

const InviteBtn = () => {
  // Es el estado si se muestra el modal de los invitados o no
  const [displayGuests, setDisplayGuests] = useState(false)

  const navigate = useNavigate();

  // esta funcion redirige al usuario a la vista para agregar mas personas
  const addPeoples = () => {
    // agregar el path de la vista de agregar mas personas
    navigate("/invitefriends");
  };

  return (
    <View style={styles.inviteBtn}>
      <Image
        style={styles.inviteBtnImage}
        source={require("../../assets/profilePictureTemp.png")}
      />
      <TouchableOpacity style={styles.inviteBtnAdd} onPress={addPeoples}>
        <Add />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setDisplayGuests(true)}>
        <ThreePointOptions />
      </TouchableOpacity>
      <ModalGuests displayGuests={displayGuests} setDisplayGuests={setDisplayGuests} />
    </View>
  );
};

const styles = StyleSheet.create({
  inviteBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 32,
  },
  inviteBtnImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: colors.primaryOrange,
  },
  inviteBtnAdd: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryOrange,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    left: -20,
  },
});

export default InviteBtn;
