import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { Toast } from "toastify-react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import {Animal} from '../types/animal';
import colors from '../utils/global_colors';
import {Button, Portal, Provider} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const emojisWithIcons = [
  {title: 'Una casa', value: 'house'},
  {title: 'Un apartamento', value: 'apartment'},
  {title: 'Un PH', value: 'ph'},
  {title: 'Una habitación', value: 'room'},
];

const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  age: yup
    .number()
    .min(18, 'Debes ser mayor de 18 años')
    .required('La edad es obligatoria'),
  address: yup.string().required('La dirección es obligatoria'),
  email: yup.string().email("Coloque un email válido").required('El email es obligatorio'),
  phone: yup.string().required('El teléfono es obligatorio'),
  income: yup
    .number()
    .min(1100, 'Tus ingresos deben ser mayores a 1100 € para adoptar')
    .required('Los ingresos son obligatorios'),
  livingPlace: yup.string().required('Debes seleccionar un tipo de vivienda'),
  hasOtherPets: yup.boolean(),
});

const Label = ({text}: {text: string}) => {
  return <Text style={styles.label}> {text} </Text>
};

const AdoptButton = ({item}: {item: Animal}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      age: 18,
      address: '',
      email: '',
      phone: '',
      income: 0,
      livingPlace: 'Una casa',
      hasOtherPets: false,
    },
  });

  const handleAdoptButton = () => {
    setModalVisible(true);
  };

  const onSubmit = (data: {}) => {
    setModalVisible(false);
    Toast.success('Te contactaremos por email o llamada. ¡Gracias!');
  };

  return (
    <Provider>
      <TouchableOpacity
        style={styles.adoptButton}
        onPress={() => handleAdoptButton()}>
        <Text style={styles.adoptText}>Quiero adoptar a {item.name}</Text>
      </TouchableOpacity>

      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          style={styles.modalWrapper}
          animationType="slide"
          transparent={true}>
          <TouchableWithoutFeedback>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={styles.closeButton}>
                  <MaterialIcons name="close" size={20} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Formulario</Text>

                <ScrollView style={{width: '90%'}}>
                  <Label text="Nombre y apellido" />
                  <Controller
                    control={control}
                    name="name"
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="Nombre y apellido"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  />
                  {errors.name && (
                    <Text style={styles.errorText}>{errors.name.message}</Text>
                  )}

                  <Label text="Edad" />
                  <Controller
                    control={control}
                    name="age"
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Edad"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  />
                  {errors.age && (
                    <Text style={styles.errorText}>{errors.age.message}</Text>
                  )}

                  <Label text="Dirección" />
                  <Controller
                    control={control}
                    name="address"
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="Dirección"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  />
                  {errors.address && (
                    <Text style={styles.errorText}>
                      {errors.address.message}
                    </Text>
                  )}
                  <Label text="Email" />
                  <Controller
                    control={control}
                    name="email"
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        placeholder="Dirección"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  />
                  {errors.email && (
                    <Text style={styles.errorText}>
                      {errors.email.message}
                    </Text>
                  )}

                  <Label text="Teléfono" />
                  <Controller
                    control={control}
                    name="phone"
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Teléfono"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  />
                  {errors.phone && (
                    <Text style={styles.errorText}>{errors.phone.message}</Text>
                  )}

                  <Label text="Ingresos mensuales (€)" />
                  <Controller
                    control={control}
                    name="income"
                    render={({field: {onChange, value}}) => (
                      <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        placeholder="Ingresos mensuales en Euros"
                        value={value}
                        onChangeText={onChange}
                      />
                    )}
                  />
                  {errors.income && (
                    <Text style={styles.errorText}>
                      {errors.income.message}
                    </Text>
                  )}

                  <SelectDropdown
                    data={emojisWithIcons}
                    onSelect={(selectedItem, index) => {
               
                    }}
                    renderButton={(selectedItem, isOpened) => {
                      return (
                        <View style={styles.dropdownButtonStyle}>
                          <Label text="Vives en:" />
                          <Text style={styles.dropdownButtonTxtStyle}>
                            {(selectedItem && selectedItem.title) || 'Una casa'}
                          </Text>
                          <MaterialIcons
                            name={isOpened ? 'expand-less' : 'expand-more'}
                            size={20}
                            color="black"
                          />
                        </View>
                      );
                    }}
                    renderItem={(item, isSelected) => {
                      return (
                        <View
                          style={{
                            ...styles.dropdownItemStyle,
                            ...(isSelected && {
                              backgroundColor: '#D3D3D3',
                            }),
                          }}>
                          <MaterialIcons name={item.icon} size={24} />

                          <Text style={styles.dropdownItemTxtStyle}>
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                  />
                  {errors.livingPlace && (
                    <Text style={styles.errorText}>
                      {errors.livingPlace.message}
                    </Text>
                  )}

                  <View style={styles.hasOtherPetsContainer}>
                    <Controller
                      control={control}
                      name="hasOtherPets"
                      render={({field: {onChange, value}}) => (
                        <CheckBox
                          value={value}
                          onValueChange={onChange}
                          tintColors={{true: colors.primary, false: 'gray'}}
                        />
                      )}
                    />
                    <View style={{marginLeft: 5}}>
                      <Label text="Tengo otras mascotas" />
                    </View>
                  </View>
                </ScrollView>
                <Button
                  mode="contained"
                  onPress={handleSubmit(onSubmit)}
                  disabled={!isValid}>
                  Enviar formulario
                </Button>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default AdoptButton;

const styles = StyleSheet.create({
  adoptText: {
    margin: 8,
    borderColor: colors.primary,
    color: colors.white,
    fontFamily: 'Mulish-SemiBold',
  },
  adoptButton: {
    width: '98%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginVertical: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '85%',
    height: 650,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Mulish-Bold',
  },
  input: {
    height: 38,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Mulish-Bold',
    marginBottom: 3,
  },
  dropdownButtonStyle: {
    width: 200,
    height: 36,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 13,
    fontFamily: 'Mulish-Regular',
    marginBottom: 3,
    marginLeft: 5,
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },

  dropdownMenuStyle: {
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Mulish-Light',
  },
  hasOtherPetsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 15,
  },
  closeButton: {position: 'absolute', left: 25, top: 25},
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8, marginTop: -7
  },
});
