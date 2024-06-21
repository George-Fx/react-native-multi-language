import {Alert} from 'react-native';

const userDeleted = () => {
  return Alert.alert(
    'Account Deleted',
    'Your account has been deleted successfully',
  );
};

const somethingWentWrong = () => {
  return Alert.alert('Error', 'Something went wrong, please try again later');
};

const invalidOtp = () => {
  return Alert.alert('Invalid OTP', 'Please enter valid OTP');
};

const invalidUsernameOrPassword = () => {
  return Alert.alert('Error', 'Invalid username or password');
};

const userWithThisNameOrEmailAlreadyExists = () => {
  return Alert.alert('Error', 'User with this name or email already exists');
};

const phoneAlreadyVerified = () => {
  return Alert.alert(
    'Phone Number Verified',
    'You can now use features requiring phone verification',
  );
};

const emailAlreadyVerified = () => {
  return Alert.alert(
    'Email Verified',
    'You can now use features requiring email verification',
  );
};

const socialLoginWarning = () => {
  return Alert.alert(
    'Social Login Not Available',
    'Login with social media is not available yet',
  );
};

const socialRegisterWarning = () => {
  return Alert.alert(
    'Social Register Not Available',
    'Register with social media is not available yet',
  );
};

const videoPlaybackWarning = () => {
  return Alert.alert(
    'Video Playback Not Available',
    'Video playback is not available yet',
  );
};

const otpSentSuccess = () => {
  return Alert.alert('Success', 'OTP sent successfully');
};

const enterValidOtp = () => {
  return Alert.alert('Reminder', 'Please enter a validated OTP');
};

const verifyReminder = () => {
  return Alert.alert(
    'Verification Required',
    'Verify email/phone to edit profile',
  );
};

const emailVerified = () => {
  return Alert.alert('Email Verified', 'Your email has been verified');
};

export const verifyEmailAndPhone = () => {
  return Alert.alert(
    'Verification Required',
    'You need to verify your email and phone number to see your personal information.',
  );
};

export const noProductsInCategory = () => {
  return Alert.alert('No Products', 'No products in this category');
};

const alreadyAdded = () => {
  return Alert.alert('Already Added', 'This product is already in your cart');
};

const promocodeRequired = () => {
  return Alert.alert('Promocode Required', 'Please enter a promocode');
};

const invalidPromocode = () => {
  return Alert.alert(
    'Invalid Promocode',
    'The promocode you entered is invalid',
  );
};

const promocodeAlreadyApplied = () => {
  return Alert.alert(
    'Promocode Already Applied',
    'You have already applied a promocode',
  );
};

const verificationRequired = () => {
  return Alert.alert(
    'Verification Required',
    'Please verify your email and phone number before proceeding',
  );
};

export const phoneVerified = () => {
  return Alert.alert(
    'Phone Number Verified',
    'Your phone number has been verified',
  );
};

export const nameAlreadyExists = () => {
  return Alert.alert('Name Already Exists', 'This name is already taken');
};

export const yourCartIsEmpty = () => {
  return Alert.alert(
    'Your cart is empty',
    'Please add some items to your cart',
  );
};

export const userDoesNotExist = () => {
  return Alert.alert('User does not exist', 'Please register first');
};

export const alert = {
  invalidOtp,
  userDeleted,
  alreadyAdded,
  emailVerified,
  phoneVerified,
  enterValidOtp,
  otpSentSuccess,
  yourCartIsEmpty,
  invalidPromocode,
  userDoesNotExist,
  promocodeRequired,
  nameAlreadyExists,
  somethingWentWrong,
  verifyEmailAndPhone,
  verificationRequired,
  noProductsInCategory,
  promocodeAlreadyApplied,
  invalidUsernameOrPassword,
  userWithThisNameOrEmailAlreadyExists,
};
