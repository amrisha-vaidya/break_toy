require 'spec_helper'
require 'rails_helper'

describe User do
  it { should have_valid(:first_name).when('John', 'Jane') }
  it { should not have_valid(:first_name).when(nil,'') }

  it { should have_valid(:email).when('john@example.com', 'jane@example.com') }
  it { should not have_valid(:email).when(nil, '') }

  it 'has a matching password confirmation for the password' do
    user= User.new
    user.password = 'password'
    user.password_confirmation = 'anotherpassword'
    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end

end
