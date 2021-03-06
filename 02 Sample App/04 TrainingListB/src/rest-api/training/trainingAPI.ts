import {Training} from '../../models/training';
import {trainingsMockData} from './trainingMockData';

// Fake API using es6 Promises polyfill (with core-js).
// In future, we can replace by real one.
class TrainingAPI {
  public fetchTrainings(): Promise<Training[]> {
    return Promise.resolve(trainingsMockData);
  }
}

export const trainingAPI = new TrainingAPI();
