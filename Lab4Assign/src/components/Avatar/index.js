import { Image, View } from 'react-native';

const Avatar = (props) => {
  return (
    <View
      style={{
        width: props.toggle ? 250 : 150,
        height: props.toggle ? 250 : 150,
        boxShadow: '#000',
        border: '15px solid #000',
        padding: 5,
        borderRadius: 75,
      }}
    >
      <Image
        source={{ uri: 'https://instagram.fdvo2-1.fna.fbcdn.net/v/t51.2885-19/465622078_533168712842402_1773287636153261590_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdvo2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=cNeqjTMuaMMQ7kNvgG45B76&_nc_gid=0a675dee4ed149289c5393e01c27c575&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYCT0syDlgBuk8expUAFRegZedUgbM8wAGmf_NcoxhRjZA&oe=674C435B&_nc_sid=8b3546' }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
};

export default Avatar;
