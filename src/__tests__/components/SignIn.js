import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      const onSubmit = jest.fn();
      const result = render(<SignInContainer onSubmit={onSubmit} />)

      fireEvent.changeText(result.getByPlaceholderText("Username"), "kalle");
      fireEvent.changeText(result.getByPlaceholderText("Password"), "password");
      fireEvent.press(result.getByText("Sign in"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password",
        });
      });
    });
  });
});