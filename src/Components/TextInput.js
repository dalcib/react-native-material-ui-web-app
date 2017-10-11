import { StyleSheet, ScrollView, TextInput } from 'react-native'
import React, { Component } from 'react'

import { Toolbar, Subheader } from 'react-native-material-ui'
//import { TextField as TextInput } from 'react-native-material-textfield'
//import TextField from 'react-native-md-textinput'

import Container from './Container'

const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 4,
    paddingVertical: 30,
    //backgroundColor: '#E8EAF6',
  },

  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#333',
  },
})

const propTypes = {}

class TextFieldSpec extends Component {
  constructor(props) {
    super(props)

    this.inputs = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    }
  }

  /*this.onFocus = this.onFocus.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeText = this.onChangeText.bind(this)
    this.onSubmitFirstName = this.onSubmitFirstName.bind(this)
    this.onSubmitLastName = this.onSubmitLastName.bind(this)
    this.onSubmitAbout = this.onSubmitAbout.bind(this)
    this.onSubmitEmail = this.onSubmitEmail.bind(this)
    this.onSubmitPassword = this.onSubmitPassword.bind(this)
    this.onAccessoryPress = this.onAccessoryPress.bind(this)

    this.firstnameRef = this.updateRef.bind(this, 'firstname')
    this.lastnameRef = this.updateRef.bind(this, 'lastname')
    this.aboutRef = this.updateRef.bind(this, 'about')
    this.emailRef = this.updateRef.bind(this, 'email')
    this.passwordRef = this.updateRef.bind(this, 'password')

    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this)

    this.state = {
      firstname: 'Eddard',
      lastname: 'Stark',
      about:
        'Stoic, dutiful, and honorable man, considered to embody the values of the North',
      secureTextEntry: true,
    }
  }
  onFocus() {
    let { errors = {} } = this.state

    for (let name in errors) {
      let ref = this[name]

      if (ref && ref.isFocused()) {
        delete errors[name]
      }
    }

    this.setState({ errors })
  }

  onChangeText(text) {
    ;['firstname', 'lastname', 'about', 'email', 'password']
      .map(name => ({ name, ref: this[name] }))
      .forEach(({ name, ref }) => {
        if (ref.isFocused()) {
          this.setState({ [name]: text })
        }
      })
  }

  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({
      secureTextEntry: !secureTextEntry,
    }))
  }

  onSubmitFirstName() {
    this.lastname.focus()
  }

  onSubmitLastName() {
    this.about.focus()
  }

  onSubmitAbout() {
    this.email.focus()
  }

  onSubmitEmail() {
    this.password.focus()
  }

  onSubmitPassword() {
    this.password.blur()
  }

  onSubmit() {
    let errors = {}
    ;['firstname', 'lastname', 'email', 'password'].forEach(name => {
      let value = this[name].value()

      if (!value) {
        errors[name] = 'Should not be empty'
      } else {
        if ('password' === name && value.length < 6) {
          errors[name] = 'Too short'
        }
      }
    })

    this.setState({ errors })
  }

  updateRef(name, ref) {
    this[name] = ref
  }

  renderPasswordAccessory() {
    let { secureTextEntry } = this.state

    let name = secureTextEntry ? 'visibility' : 'visibility-off'

    return (
      <Icon
        size={24}
        name={name}
        color={TextInput.defaultProps.baseColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting
      />
    )
  }*/
  /* let { errors = {}, secureTextEntry, ...data } = this.state
    let { firstname = 'name', lastname = 'house' } = data

    let defaultEmail = `${firstname}@${lastname}.com`
      .replace(/\s+/g, '_')
      .toLowerCase() */
  render() {
    return (
      <Container>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.history.goBack()}
          centerElement={'Checkboxes'}
        />
        <ScrollView style={styles.scroll}>
          <Subheader text="react-native-md-textinput" />
          <TextInput
            label={'Name'}
            highlightColor={'#00BCD4'}
            onChangeText={text => {
              this.inputs.name = text
            }}
            value={'Jane'}
            dense={true}
          />
        </ScrollView>
      </Container>
    )
  }
}
/*
          <Subheader text="react-native-material-textfield" />
          <View style={styles.container}>
            <TextInput
              ref={this.firstnameRef}
              value={data.firstname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitFirstName}
              returnKeyType="next"
              label="First Name"
              error={errors.firstname}
            />

            <TextInput
              ref={this.lastnameRef}
              value={data.lastname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType="next"
              label="Last Name"
              error={errors.lastname}
            />

            <TextInput
              ref={this.aboutRef}
              value={data.about}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitAbout}
              returnKeyType="next"
              multiline={true}
              label="About (optional)"
              characterRestriction={140}
            />

            <TextInput
              ref={this.emailRef}
              value={data.email}
              defaultValue={defaultEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Email Address"
              error={errors.email}
            />

            <TextInput
              ref={this.passwordRef}
              value={data.password}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitPassword}
              returnKeyType="done"
              label="Password"
              error={errors.password}
              title="Choose wisely"
              maxLength={30}
              characterRestriction={20}
              renderAccessory={this.renderPasswordAccessory}
            />

            <TextInput
              value={data.lastname}
              label="House"
              title="Derived from last name"
              disabled={true}
            />
          </View>

          <View style={styles.container}>
            <Button raised primary text="submit" onPress={this.onSubmit} />/>
          </View>




           <TextField
            label={'Address'}
            highlightColor={'#FF5722'}
            onChangeText={text => {
              this.inputs.address = text
            }}
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.refs.cityInput.focus()
            }}
            dense={true}
          />
          <TextField
            label={'City'}
            highlightColor={'#673AB7'}
            onChangeText={text => {
              this.inputs.city = text
            }}
            ref="cityInput"
          />
          <TextField
            label={'State'}
            highlightColor={'#E91E63'}
            onChangeText={text => {
              this.inputs.state = text
            }}
            value={'WA'}
          />
          <TextField
            label={'Zip'}
            highlightColor={'#F44336'}
            onChangeText={text => {
              this.inputs.zip = text
            }}
            onBlur={() => {
              console.log(this.inputs)
            }}
            keyboardType={'numeric'}
          />
          */

TextFieldSpec.propTypes = propTypes

export default TextFieldSpec
