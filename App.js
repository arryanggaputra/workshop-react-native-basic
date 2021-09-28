import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [judulTugas, setJudulTugas] = useState("");
  const [listTugas, setListTugas] = useState([]);

  function simpanTugas() {
    let listTugas_temporary = [...listTugas];

    listTugas_temporary.push(judulTugas);

    setListTugas(listTugas_temporary);

    setJudulTugas("");
  }

  function hapusTugas(tugasYangDihapus) {
    let listTugas_temporary = [...listTugas].filter(
      (tugas) => tugas !== tugasYangDihapus
    );
    setListTugas(listTugas_temporary);
  }

  useEffect(() => {
    if (listTugas.length > 0) {
      AsyncStorage.setItem(
        "daftarTugasStorage",
        JSON.stringify(listTugas || [])
      );
    }
  }, [listTugas]);

  return (
    <View style={styles.container}>
      <View style={styles.form__area}>
        <Text style={styles.form__area__title}>Tugas Harian</Text>
        <TextInput
          onChangeText={(value) => {
            setJudulTugas(value);
          }}
          value={judulTugas}
          style={styles.form__area__input}
          placeholder="Masukan Judul Tugas"
        />

        <TouchableOpacity
          onPress={simpanTugas}
          style={styles.form__area__button}
        >
          <Text style={styles.form__area__button__text}>Simpan</Text>
        </TouchableOpacity>
      </View>

      {listTugas.map((item) => {
        return (
          <View style={styles.task__list}>
            <Text>{item}</Text>
            <TouchableOpacity
              style={styles.task__list__button__delete}
              onPress={() => hapusTugas(item)}
            >
              <Text style={{ fontSize: 10 }}>Hapus</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  form__area: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#FCD2D1",
  },

  form__area__title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  form__area__input: {
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: "white",
    borderColor: "#FF5C58",
  },
  form__area__button: { backgroundColor: "#FF5C58", padding: 10 },
  form__area__button__text: { textAlign: "center", color: "#FFF8E5" },

  task__list: {
    marginBottom: 10,
    borderBottomColor: "#FCD2D1",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  task__list__button__delete: {
    backgroundColor: "#FCD2D1",
    padding: 3,
    marginHorizontal: 5,
  },
});
