<template>
    <div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="male" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
                Male
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="female" value="option2">
            <label class="form-check-label" for="exampleRadios2">
                Female
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
            <label class="form-check-label" for="exampleRadios3">
                Disabled radio
            </label>
        </div>


        <div class="">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Monday" id="Monday">
                <label class="form-check-label" for="Monday">
                    Monday
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Tuesday" id="Tuesday">
                <label class="form-check-label" for="Tuesday">
                    Tuesday
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Wednesday" id="Wednesday">
                <label class="form-check-label" for="Wednesday">
                    Wednesday
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Thursday" id="Thursday">
                <label class="form-check-label" for="Thursday">
                    Thursday
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Friday" id="Friday">
                <label class="form-check-label" for="Friday">
                    Friday
                </label>
            </div>
        </div>


        <div class="">
            <label for="pokemonSelect">Select a Pokemon:</label>
            <select id="pokemonSelect">
                <option value="bulbasaur">Bulbasaur</option>
                <option value="ivysaur">Ivysaur</option>
                <option value="venusaur">Venusaur</option>
                <option value="charmander">Charmander</option>
                <option value="charmeleon">Charmeleon</option>
                <option value="charizard">Charizard</option>
                <option value="squirtle">Squirtle</option>
                <option value="wartortle">Wartortle</option>
                <option value="blastoise">Blastoise</option>
                <option value="pikachu">Pikachu</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>