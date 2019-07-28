import { connect } from 'react-redux';
import ContactForm from '../../components/contact/ContactForm';
import { getMessage, getError, getConfirmation } from '../../selectors/contact';
import { updateMessage, sendMessage } from '../../actions/contact';

const mapStateToProps = state => ({
  message: getMessage(state),
  error: getError(state),
  confirmation: getConfirmation(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    const { name, value } = target;
    dispatch(updateMessage({ [name]: value }));
  },

  handleSubmit(message, event) {
    event.preventDefault();
    dispatch(sendMessage(message));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
