import React from 'react';
import { Text, ScrollView } from 'react-native';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: "Nyhed"
  };

  render() {
    return (
      <ScrollView>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor nibh, maximus quis feugiat gravida, fringilla eu sem. Ut non sollicitudin arcu. Sed pharetra interdum sapien a rutrum. Aenean sollicitudin iaculis dui eget porttitor. Sed quis massa sed lectus ullamcorper malesuada. Aliquam eu risus ex. Praesent molestie iaculis ligula, sit amet ultricies metus tincidunt aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eleifend lacus et porta accumsan. Nam a dictum ex, non dignissim leo. Aenean mollis sapien et diam vehicula commodo.
          {"\n"}
          {"\n"}
          Aliquam ligula est, hendrerit ac nulla sed, pellentesque vehicula metus. Nulla eget hendrerit elit, sit amet porta purus. Maecenas et ex et erat posuere lacinia ut vitae nunc. Fusce lobortis vel lacus eu porttitor. Suspendisse molestie euismod dolor in faucibus. Fusce placerat sollicitudin lectus. Aenean vitae nisi urna. In placerat placerat pharetra. Fusce volutpat dolor quam, non fermentum lacus ornare aliquam. Nulla gravida, augue ac malesuada sodales, dolor justo lacinia ligula, id semper neque nisl at dui. Suspendisse quis pellentesque lorem. Nullam porta nisl tincidunt, congue velit vel, suscipit risus.
          {"\n"}
          {"\n"}
          Pellentesque et ornare ipsum, nec faucibus turpis. Vestibulum nibh diam, porttitor ac diam eu, commodo accumsan ante. Suspendisse at sagittis libero. Integer at rutrum sapien. Mauris id egestas dui. Ut non sapien hendrerit, rhoncus tellus nec, vehicula nisl. Nullam feugiat lobortis leo id suscipit. Pellentesque laoreet ut turpis at semper. Vivamus gravida arcu vel est laoreet rhoncus. Ut nec augue sed ipsum lobortis sollicitudin. Aliquam interdum, lorem vitae fringilla imperdiet, urna ex ornare libero, mollis vestibulum nulla lacus consequat lacus. Donec eget velit tristique, finibus arcu nec, iaculis urna. Praesent ut consequat enim. Phasellus in tincidunt elit. Aenean erat purus, venenatis vel facilisis sit amet, tempor quis mi. Suspendisse potenti.
          {"\n"}
          {"\n"}
       </Text>


        <Text>
          Vivamus quis vehicula orci. Quisque blandit, massa eget lobortis pretium, orci nibh tincidunt urna, quis fermentum orci nisi sed justo. Sed suscipit eget nulla sit amet dapibus. Nulla maximus nulla quam, in interdum nulla dapibus sed. Donec at purus lobortis, tempus lacus et, rhoncus felis. Aenean ultrices rhoncus lorem vel dapibus. Quisque at tortor eget nunc scelerisque finibus in sed turpis. In lacinia dolor eros, consequat iaculis lectus finibus at. Fusce ut vehicula mi, ac venenatis est. Vestibulum interdum scelerisque nisl sit amet mattis. Etiam sed est vitae urna tempor accumsan vel id sem. Ut vel ex eget nibh condimentum efficitur. Phasellus quis dignissim massa. Integer ipsum velit, ornare mollis tortor vitae, dictum eleifend lorem. Aliquam ornare felis sed augue egestas consequat.
          {"\n"}
          {"\n"}
          Proin finibus metus molestie justo porttitor luctus. Proin consequat vitae est eget scelerisque. Aenean id mauris euismod, iaculis velit sit amet, consequat quam. Suspendisse tincidunt nibh vel scelerisque congue. Quisque iaculis nisl vitae eleifend iaculis. Vestibulum in pulvinar leo. Donec mattis nunc felis, non sollicitudin metus tempor aliquam. Etiam consequat, tortor vel malesuada scelerisque, libero eros porttitor felis, a porttitor leo nibh non metus. Ut mattis mauris sed ex tincidunt dictum. Vivamus eget lectus et eros faucibus posuere. Aenean orci lorem, cursus id ultrices quis, consequat vel ex. Morbi volutpat molestie augue sit amet iaculis. Ut in condimentum mi, pretium sollicitudin nulla. Nam aliquet dui a magna cursus, a consequat justo finibus. Donec in pretium tellus. Nunc convallis tempor magna quis cursus.
        </Text>
      </ScrollView>
    );
  }
}
