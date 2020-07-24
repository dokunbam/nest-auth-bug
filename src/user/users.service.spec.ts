/*import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

const mockRegisterDto = {
  firstname: 'testfirstname',
  lastname: 'testlastname',
  password: 'testpassword',
  email: 'test@test.com',
  phonenumber: '08023456787',
  bvn: 12345678910,
  accountnumber: '1234567890',
  passportphoto: 'testphoto.png',
  identification: 'testidentification.png',
  proofofaddress: 'testprofadd.png',
  bankname: 'testbankname',
  accountname: 'testaccname',
  address: 'testaddress',
  state: 'teststate',
  lga: 'testlga',
  aggregator: 'testaggregator',
  datecreated: Date.now,
  hasPOS: false,
  isActive: false,
  confirmEmail: false,
  activateEmail: false,
  usertype:'Admin'
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  describe('register', ()=> {
    let save;
    beforeEach(()=>{
      save = jest.fn();
      service.register = jest.fn().mockReturnValue({save})
    })
    it('Should successfully signs up a user', () => {
      expect(service).toBeDefined();
    });
  });


});
*/